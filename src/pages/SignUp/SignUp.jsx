import { Link, useNavigate } from "react-router-dom";
import singInImg from "../../assets/images/signin.jpg";
import { BsGoogle } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, makeProfile, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return toast.error("Password should be at least 6 characters");
    }

    // password validation for at least one capital letter.
    if (!/(?=.*[A-Z])/.test(password)) {
      return toast.error("Password should have at least one uppercase letter.");
    }

    // password validation for at least  one specific character.
    if (!/(?=.*[@#$%^&+=!])/.test(password)) {
      return toast.error(
        "Password should have at least one specific character."
      );
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          makeProfile(name, photo).then(() => {
            toast.success("Sign Up successful.");
            navigate("/");
          });
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
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 my-7 lg:my-10 bg-gray-100 rounded-2xl ">
      <div className="w-full text-black flex gap-5 justify-between items-center py-10">
        <div className="w-2/3 hidden lg:flex gap-10 justify-center items-center ">
          <img src={singInImg} alt="" className="h-[650px] rounded-xl" />
        </div>
        <div className="w-full lg:w-1/3 ">
          <div className="bg-white max-w-md mx-auto py-5 p-8 rounded-xl ">
            <form onSubmit={handleCreateUser}>
              <h3 className="text-xl md:text-2xl  font-semibold mb-5 text-center">
                Welcome! Sign Up Here
              </h3>
              <div className="my-1">
                <label htmlFor="name" className="block py-2 ml-1 font-medium">
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="w-full p-3 border-2 rounded"
                  placeholder="Your Name Here"
                  required
                />
              </div>
              <div className="my-1">
                <label htmlFor="photo" className="block py-2 ml-1 font-medium">
                  Photo URL
                </label>
                <input
                  type="photo"
                  name="photo"
                  id="photo"
                  className="w-full p-3 border-2 rounded"
                  placeholder="Your Photo Url"
                  required
                />
              </div>
              <div className="my-1">
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
                  className="block py-1 ml-1 font-medium"
                >
                  Password{" "}
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
                className="w-full py-3 bg-[#008FD4] hover:bg-[#0870A1] text-white rounded mt-3 mb-5 duration-300"
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
                to={"/signIn"}
                className="font-bold text-[#008FD4] hover:text-[#0870A1]"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
