import {NextResponse} from "next/server";

export async function POST(req:Request){
  let body:{name?:string;email?:string;service?:string;message?:string};
  try{body=await req.json();}catch{return NextResponse.json({error:"Invalid request."},{status:400});}

  const name=body.name?.trim()??"";
  const email=body.email?.trim()??"";
  const service=body.service?.trim()??"";
  const message=body.message?.trim()??"";

  if(!name||!email||!message)return NextResponse.json({error:"Please fill in your name, email and message."},{status:400});
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return NextResponse.json({error:"Please enter a valid email address."},{status:400});
  if(name.length>200||email.length>200||service.length>200||message.length>5000)return NextResponse.json({error:"One of the fields is too long."},{status:400});

  // TODO: deliver the enquiry by email (e.g. Resend, SendGrid) or persist it.
  // Until then it is only visible in the deployment's function logs.
  console.log("Contact enquiry:",{name,email,service,message});

  return NextResponse.json({ok:true});
}
