import Link from "next/link";
import Image from "next/image";

export default function blog() {
  return (
    <>
      <h1>Blog Page</h1>
     <body>
      <div className="w-full h-screen bg-blue flex flex-wrap">
    <Image className="basis-1/3" src="http://blog.panoramasoftwares.com/wp-content/uploads/2021/10/9162ceb4-dc59-44b2-ad90-448e58bef565-1024x1024.jpg" alt="logo" height="10" width="30"></Image>
    <Image className="basis-1/3" src="http://blog.panoramasoftwares.com/wp-content/uploads/2021/10/fb90cd09-1900-47ac-a487-3322b7e78635.jpg" alt="logo" height="10" width="50"></Image>
    <Image className="basis-1/3" src="http://blog.panoramasoftwares.com/wp-content/uploads/2021/10/8a1bf80f-9192-48e6-b91c-2a736f84f860.jpg" alt="logo" height="10" width="50"></Image>
      <Image className="basis-1/3" src="http://blog.panoramasoftwares.com/wp-content/uploads/2021/11/b9cdcdfe-37cd-46a6-a245-d512e52d0538-1024x1024.jpg" alt="logo" height="10" width="50"></Image>
      <Image className="basis-1/3" src="http://blog.panoramasoftwares.com/wp-content/uploads/2021/12/32d84056-640e-4d13-9554-fb9d36ce69bc-1024x1024.jpg" alt="logo" height="10" width="50"></Image>
      </div>
     </body>
    </>
  );
}
