import React from 'react'

export default function response() {
  return (
    <>
    <form>
        <div  className="container flex flex-col px-20 py-20 gap-y-5">
            <h1 className="font-bold text-xl">Leave a Comment</h1>
            <p>Your email address will not be published. Required fields are marked *</p>
            <textarea className="mt-10 rounded border-solid-blue px-4 pt-4 bg-slate" name="comment" rows={10} cols={155} placeholder='Type here...'></textarea>
        <div className="flex justify-between py-10">
            <input className="rounded border-solid-blue bg-slate h-10 w-60 px-4 required:" type={'text'} name='Name' placeholder='Name*'></input>
            <input className="rounded border-solid-blue bg-slate h-10 w-60 px-4 required" type={'email'} name='Email' placeholder='Email*'></input>
            <input className="rounded border-solid-blue bg-slate h-10 w-60 px-4" type={'text'} name='Website' placeholder='Website'></input>
        </div>
       <div>
        <input type={'checkbox'}></input>
        <label className="mx-2"> Save my name, email, and website in this browser for the next time I comment.
</label>
<br></br>
       <button className="text-white bg-off px-4 py-3 rounded mt-5 hover:bg-gray">Post Comment</button>
       </div>
        </div>
        
    </form>
    </>
  )
}
