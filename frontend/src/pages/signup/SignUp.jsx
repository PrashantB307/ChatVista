import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";


const SignUp = () => {

	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});
	
	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-4xl font-bold text-center text-gray-200 mb-3'>
				SignUp <span className='text-blue-700'>ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-gray-600 text-base label-text font-bold'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='Full Name'
							className='w-full input input-bordered  h-10 text-gray-300'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-gray-600 text-base label-text font-bold'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Username'
							className='w-full input input-bordered h-10 text-gray-300'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
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
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-gray-600 text-base label-text font-bold'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10 text-gray-300'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

                    {/* Gender CheckBox */}
					<GenderCheckBox  onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/> 
					
					<Link to={"/login"}
						className='text-gray-600 text-sm hover:underline hover:text-blue-600 mt-2 inline-block font-bold'
						href='#'
					>
						Already have an account?
					</Link>

					<div>
					<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
  )
}

export default SignUp;