import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";



const Login = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-4xl font-bold text-center text-gray-200 mb-3'>
					Login
					<span className='text-blue-700'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-gray-600 text-base label-text font-bold'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter Username'
							className='w-full input input-bordered h-10 text-gray-300'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-gray-600 text-base label-text font-bold'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 text-gray-300'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							
						/>
					</div>
					<Link to='/signup' className='text-sm text-gray-600 hover:underline hover:text-blue-600 mt-2 inline-block font-bold'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 font-bold' >
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
  )
}

export default Login;