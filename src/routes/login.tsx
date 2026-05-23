import { createFileRoute } from '@tanstack/react-router'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"


import { Button } from '#/components/ui/button'
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';



export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  

  return (

    <div className="p-30 flex flex-row items-center justify-center">

     

      <div className="p-4 h-64 flex-1 items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome Back</h1>
        <h1 className="text-lg py-4">Enter your credentials to access your account</h1>
        <h1 className="text-lg">Name</h1>
        <Input placeholder="Username" className="w-100" />
        <h1 className="text-lg mt-4">Email</h1>
        <Input placeholder="Email Address" className="w-100" />
        <h1 className="text-lg mt-4">Password</h1>
        <Input placeholder="Password" type="password" className="w-100" />
        <Checkbox id="I agree to the Terms and Policy" className="mt-4" />
        <label htmlFor="I agree to the Terms and Policy" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          I agree to the Terms and Policy
        </label>
        <div className="mt-4 flex flex-row items-center justify-center">
        <Button className="mt-4 bg-green-500 text-white px-50 py-2 rounded hover:bg-green-600">Login</Button>
        </div>

        <div className="mt-4 py-10 flex flex-row items-center justify-center">
          <span className="text-lg font-semibold justify-center">Or</span>
          
        </div>
        
        <div className="mt-4 flex flex-row items-center justify-center">
        <Button className="mt-4 bg-blue-900 text-white px-25 py-2 rounded hover:bg-blue-600"
          ><FcGoogle className="inline mr-2" />
        Sign in with Google</Button>
        <Button className="mt-4 bg-blue-900 text-white px-25 py-2 mx-5 rounded hover:bg-blue-600"
          ><FaApple className="inline mr-2" />
        Sign in with Apple</Button>
        </div>

        <h1 className="text-sm mt-4 justify-center flex">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a></h1>
        
      </div>

      <div className="p-4 h-64 flex-1 py">
      <img src="./src/assets/roxanne.jpeg" className="w-150 h-150 object-cover" />
      </div>

    </div>


    


  )

}
