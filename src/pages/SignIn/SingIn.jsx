import { Link, useLocation, useNavigate } from "react-router-dom";
import singInImg from "../../assets/images/signin.jpg";
import { BsGoogle } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SingIn = () => {
  const { signInUser, signInWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignInUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("Sign In successful.");
          navigate(`${location?.state ? location.state : "/"}`);
        }
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          toast.success("Sign In successful.");
          navigate(`${location?.state ? location.state : "/"}`);
        }
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 my-7 lg:my-10 bg-gray-100 rounded-2xl ">
      <div className="w-full text-black flex gap-5 justify-between items-center py-10">
        <div className="w-2/3 hidden lg:flex justify-center items-center ">
          <img src={singInImg} alt="" className="h-[500px] rounded-xl" />
        </div>
        <div className="w-full lg:w-1/3 ">
          <div className="bg-white max-w-md mx-auto py-5 p-8 rounded-xl ">
            <form onSubmit={handleSignInUser}>
              <h3 className="text-xl md:text-2xl  font-semibold mb-5 text-center">
                Sign in to your account
              </h3>
              <div className="my-2">
                <label htmlFor="email" className="block py-2 ml-1 font-medium">
                  Email{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-3 border-2 rounded"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor="password"
                  className="block py-2 ml-1 font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-3 border-2 rounded"
                  placeholder="Enter your Password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#008FD4] hover:bg-[#0870A1] text-white rounded mt-5 mb-6 duration-300"
              >
                Sign In
              </button>
            </form>
            <div className="divider">Or</div>
            <div>
              <div className="flex justify-center items-center ">
                <BsGoogle
                  onClick={handleSignInWithGoogle}
                  className="text-3xl text-[#008FD4] cursor-pointer hover:text-[#0870A1] "
                />
              </div>
            </div>

            <p className="text-gray-600 font-medium text-center my-4">
              Do not have an account{" "}
              <Link
                to={"/signUp"}
                className="font-bold text-[#008FD4] hover:text-[#0870A1]"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
