import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDB();

// get request function
export async function GET(request) {
  let users = [];
  try {
    users = await User.find().select("-password");
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get users",
      scueess: "false",
    });
  }

  return NextResponse.json(users);
}

// post req function
// data post
// create userP
export async function POST(request) {
  // fetch user detail from request

  const { name, email, password, about, profileURL } = await request.json();
  console.log({ name, email, password, about, profileURL });

  // create user object with user model

  const user = new User({ name, email, password, about, profileURL });

  try {
    // save the user object to database
    const createdUser = await user.save();

    const response = NextResponse.json(user, {
      status: 201,
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create user !!",
      status: false,
    });
  }
  // ------------------
  // const body = request.body;
  // console.log(body);
  // console.log(request.method);
  // console.log(request.cookies);
  // console.log(request.headers);
  // console.log(request.nextUrl.pathname);
  // console.log(request.nextUrl.searchParams);
  // const jsonData = await request.json();
  // const textData = await request.text();
  // console.log(jsonData);
  // console.log(textData);
  // return NextResponse.json({
  //   message: "posting user data",
  // });
}
