

import dbConnect from '../../utils/db'
import User from '../../../database/user';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(request: NextApiRequest, response: NextApiResponse) {
    try {
        await dbConnect();
        const users = await User.find({});
        return NextResponse.json(users);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal server error' });
    }
}

export async function POST(request: Request, response: NextApiResponse) {
    try {
        await dbConnect();
        const createPayload = await request.json();
        const newUser = await User.create({
            username: createPayload.username,
            password: createPayload.password,
            name: createPayload.name,
            role: createPayload.role
        });
        await newUser.save();
        return NextResponse.json({msg :"Created a new user"});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal server error' });
    }
}

