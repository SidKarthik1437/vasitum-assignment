import Typist from "@jsasz/react-typist";

export default function Login() {
  return (
    <div className="flex flex-col z-10 w-full h-full md:w-auto md:h-auto shadow-2xl rounded-lg bg-white">
      <div className="bg-bg rounded-md m-5 mb-0 py-10 px-5 md:px-10 flex items-center justify-center">
        <div className="text-white font-light text-xl select-none">
          Vasitum helps you find the perfect
          <Typist>
            <span>Job!</span>
            <Typist.Backspace count={5} delay={300} />
            <span>Hire.</span>
          </Typist>
        </div>
      </div>
      <div className="bg-white flex flex-col rounded m-5 mb-0 mt-0 py-10 px-10">
        <p className="text-black mb-10 select-none desktop:text-2xl phones:text-xl">
          Our solutions drive the future of hiring.
        </p>
        <form
          method="POST"
          // onSubmit={handleLogin}

          className="flex flex-col justify-between"
        >
          <div className="flex flex-col">
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
            <span className="self-end">forgot password?</span>
            <button
              type="submit"
              className="bg-bg w-full px-2 py-2 h2 mb-2 mt-4 text-white rounded"
            >
              <span className="tracking-widest">Login</span>
            </button>
          </div>

          <fieldset className="flex flex-col items-center justify-center border-t border-t-black">
            <legend className="flex text-sm tracking-wider select-none text-black p-1 text-center ">
              or
            </legend>
            <button
              type="submit"
              className="flex bg-white w-full px-3 py-1 h2 mb-2 mt-2 justify-center items-center text-black rounded shadow-sm border-grey-primary border "
            >
              <img
                src="/assets/icons/google.svg"
                alt="google"
                className="h-4 w-4 rounded-full mx-2"
              />
              <span>Login with google</span>
            </button>
            <span
              className="cursor-pointer text-bg font-semibold tracking-wider "
              onClick={() => alert("Signup")}
            >
              new here? signup
            </span>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
