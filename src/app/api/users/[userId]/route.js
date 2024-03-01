// import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

// connectDB();

// export const GET=()=>{

// }

// get user
export async function GET(request, { params }) {
  try {
    const { userId } = params;
    const user = await User.findById(userId).select("-password");
    return NextResponse.json(user);
  } catch (error) {
    console.log("failed to get the user");
    console.log(error);
  }
}

// Delete user
export async function DELETE(request, { params }) {
  // console.log(params);
  const { userId } = params;

  try {
    await User.deleteOne(
      {
        _id: userId,
      },
      {
        timeout: false,
      }
    );

    return NextResponse.json({
      message: "user deteled successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error in delete user",
      success: false,
    });
  }
}

// update user

export async function PUT(request, { params }) {
  const { userId } = params;

  // can't update email
  const { name, password, about, profileURL } = await request.json();

  try {
    const user = await User.findById(userId);

    user.name = name;
    user.password = password;
    user.about = about;
    user.profileURL = profileURL;
    // add more informations

    const updatedUser = await user.save();

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({
      message: "failed to update user",
      success: false,
    });
  }
}


