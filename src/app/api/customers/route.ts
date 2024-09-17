import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Customer } from '@/models';
import { ApiResponse, Customer as CustomerType } from '@/types';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const data = await request.json();
    console.log('Received customer data:', data);

    const customer = await Customer.create(data);
    const response: ApiResponse<{ id: string, customer: CustomerType }> = {
      data: { 
        id: customer._id.toString(),
        customer: customer.toObject() 
      },
    };
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('Error creating customer:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    const response: ApiResponse<never> = {
      error: `Failed to create customer: ${errorMessage}`,
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();

  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    const response: ApiResponse<CustomerType[]> = { data: customers };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching customers:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to fetch customers',
    };
    return NextResponse.json(response, { status: 500 });
  }
}