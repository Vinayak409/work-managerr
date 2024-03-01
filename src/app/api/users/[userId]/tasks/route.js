import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

// url: host_url/api/users/[userId]/tasks
export async function GET(request, { params }) {
  try {
    const { userId } = params;

    // get user from userId
    const user = await User.findById(userId).select("-password");

    // get all the tasks of a particular user with userId
    const tasks = await Task.find({
      userId: userId,
    });

    // send the information like this , every task contains that user info also 

    let final = [];

    for (let i = 0; i < tasks.length; i++) {
      let eachTask = tasks[i];
      const combined = { ...user.toObject(), ...eachTask.toObject() };
      final.push(combined);
    }

    // console.log(final);
    return NextResponse.json(final);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to get tasks", 404, false);
  }
}
