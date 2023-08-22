import Modal from "@/components/shared/modal";
// import { signIn } from "next-auth/react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { LoadingDots, Google } from "@/components/shared/icons";
import Link from "next/link";
import Facebook from "next-auth/providers/facebook";

const SignUpModal = ({ showSignUpModal, setShowSignUpModal }) => {
  const [signUpClicked, setSignUpClicked] = useState(false);
  const [providers, setProviders] = useState(null);
  console.log(showSignUpModal);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <Modal showModal={showSignUpModal} setShowModal={setShowSignUpModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="/">
            <span className="h-10 w-10 rounded-full bg-gray-200 py-2 px-3.5 font-bold text-xl text-red-950">
              A
            </span>
          </a>
          <h3 className="font-display text-2xl font-bold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Only your email and profile picture will be stored.
          </p>
        </div>
        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                disabled={signUpClicked}
                className={`${signUpClicked
                  ? "cursor-not-allowed border-gray-200 bg-gray-100"
                  : "border border-gray-200 bg-white text-black hover:bg-gray-50"
                  } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
                onClick={() => {
                  setSignUpClicked(true);
                  signIn(provider.id);
                  // signIn("google");
                }}
              >
                {signUpClicked ? (
                  <LoadingDots color="#808080" />
                ) : (
                  <>
                    <Google className="h-5 w-5" />
                    <p>Sign Up with Google</p>
                  </>
                )}
              </button>
            ))}
          <div class="ce34512d1 ca017d3e4">
            <span>OR</span>
          </div>
          <form>
            <label htmlFor="email">Email or username</label>
            <br />
            <input
              type="email"
              id="email"
              className="shadow-2xl w-[20rem] my-[10px] pl-[20px] py-[5px]"
              placeholder="Email or username"
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              className="shadow-2xl w-[20rem] my-[10px] pl-[20px] py-[5px]"
              placeholder="Password"
            />
            <br />
            <button className="bg-[#912c2c] rounded-[20px] my-[10px] w-[8rem] h-[2.5rem] text-white mx-[6rem]">
              Log In
            </button>
            <Link href="" className="ml-[5rem]">
              Forgot your password?
            </Link>
          </form>
          <p className="ml-[3rem] mb-15 font-semibold">
            Don't have an account? &nbsp;
            <Link
              className="font-bold text-[#912c2c]"
              href="/components/SignUpModal"
            >
              Sign Upmkl
            </Link>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useSignUpModal() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const SignUpModalCallback = useCallback(() => {
    return (
      <SignUpModal
        showSignUpModal={showSignUpModal}
        setShowSignUpModal={setShowSignUpModal}
      />
    );
  }, [showSignUpModal, setShowSignUpModal]);

  return useMemo(
    () => ({ setShowSignUpModal, SignUpModal: SignUpModalCallback }),
    [setShowSignUpModal, SignUpModalCallback]
  );
}
