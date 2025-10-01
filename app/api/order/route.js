export async function POST(request){
  try{ const body = await request.json(); console.log("Order request:", body);
    return new Response(JSON.stringify({ ok:true }), { status:200 });
  }catch(e){ return new Response(JSON.stringify({ ok:false }), { status:400 }); }
}