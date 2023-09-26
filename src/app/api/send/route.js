import { NextResponse } from "next/server";

export async function POST() {
  try {
    // const data = await resend.emails.send({
    //   from: "",
    //   to: [""],
    //   subject: "Hello world",
    //   react: (
    //     <>
    //       <p>Email Body</p>
    //     </>
    //   ),
    // });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
