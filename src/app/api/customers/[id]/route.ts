import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Customer } from '@/models';
import { ApiResponse, Customer as CustomerType } from '@/types';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    if (!params.id) {
      throw new Error('Customer ID is required');
    }

    const customer = await Customer.findById(params.id);
    if (!customer) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    }
    const response: ApiResponse<CustomerType> = { data: customer.toObject() };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching customer:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to fetch customer',
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const data = await request.json();
    const customer = await Customer.findByIdAndUpdate(params.id, data, { new: true });
    if (!customer) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    }
    const response: ApiResponse<CustomerType> = { data: customer };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error updating customer:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to update customer',
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const customer = await Customer.findByIdAndDelete(params.id);
    if (!customer) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    }
    const response: ApiResponse<{ message: string }> = { 
      data: { message: 'Customer deleted successfully' } 
    };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error deleting customer:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to delete customer',
    };
    return NextResponse.json(response, { status: 500 });
  }
}