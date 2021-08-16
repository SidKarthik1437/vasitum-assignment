import  Typist  from '@jsasz/react-typist';

export default function login() {
  return (
    // <div className="flex w-full h-screen justify-center align-middle items-center bg-bg">
    //     <div className=" flex flex-col shadow-login bg-gray-200 rounded-lg bg-white text-black">
    //         <input type="text" className="w-64 h-8 p-4 m-4 rounded shadow-lg text-black" placeholder="Email" />
    //         <input type="text" className="w-64 h-8 p-4 m-4 rounded shadow-lg text-black" placeholder="Password" />
    //     </div>
    // </div>

    <div className="flex w-full mx-auto max-w-screen overflow-y-hidden justify-center items-center h-screen bg-bg">
      
      <div className="flex flex-col w-full h-screen  shadow-lg rounded-lg bg-white shadow-login">
        <div className="bg-bg rounded-md m-5 mb-0 py-10 px-10 flex items-center justify-center">
          <p className="text-white font-light text-xl select-none">
            Vasitum helps you find the perfect
            <Typist>
              <span>Job!</span>
              <Typist.Backspace count={5} delay={300} />
              <span>Hire.</span>
            </Typist>
          </p>
        </div>
        <div className="bg-white flex flex-col rounded m-5 mb-0 mt-0 py-10 px-10">
          <p className="text-black mb-10 select-none desktop:text-2xl phones:text-xl">
            Our solutions drive the future of hiring.
          </p>
          <form
            className="flex"
            method="POST"
            // onSubmit={handleLogin}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            className="flex flex-col"
          >
            <input
              type="email"
              placeholder="Email"
              className="text-sm text-black w-full py-5 px-2 mr-3 h-2 mb-2 border border-bg shadow-lg rounded bg-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="text-sm text-black w-full py-5 px-2 mr-3 h-2 mb-2 border border-bg shadow-lg rounded bg-white"
            />
            <span className="self-end" >forgot password?</span>
            <button
              type="submit"
              className="bg-bg w-full px-2 py-2 h2 mb-2 mt-4 text-white rounded"
            >
              <span className="tracking-widest">Login</span>
            </button>
          </form>

          <fieldset className="border-t border-t-black flex flex-col items-center justify-center">
            <legend className="flex text-sm tracking-wider select-none text-black p-1 text-center ">
              or
            </legend>

            <button
              type="submit"
              className="flex bg-white w-full px-3 py-1 h2 mb-2 mt-4 justify-center items-center text-black rounded shadow-sm border-grey-primary border "
            >
              <img
                src="/assets/icons/google.svg"
                alt="google"
                className="h-4 w-4 rounded-full mx-2"
              />
              <span>Login with google</span>
            </button>
          </fieldset>
            {/* <fieldset className="border-t border-t-black mt-2" >
              <legend className="flex text-sm tracking-wider select-none text-black p-1 text-center ">
                or
              </legend>
            <00  /fieldset> */}

            
        </div>
      </div>
    </div>
  );
}
