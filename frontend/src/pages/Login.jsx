export const Login=() =>{
    return (
        <section className="bg-gray-100 min-h-screen flex box-border justify-center items-center">
            <div className="bg-[#dfa674] rounded-2xl flex max-w-3xl p-5 items-center">
                <div className="md:w-1/2 px-8">
                    <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
                    <p className="text-sm mt-4 text-[#002D74]">If you are already a member, easily log in now.</p>

                    <form action="" className="flex flex-col gap-4">
                        <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" />
                        <div className="relative">
                            <input className="p-2 rounded-xl border w-full" type="password" name="password" id="password" placeholder="Password" />
                            {/* Your eye and eye-slash SVGs */}
                        </div>
                        <button className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium" type="submit">Login</button>
                    </form>
                    {/* OR section */}
<div className="mt-10 grid items-center text-gray-500 or-grid">
    <p className="text-center text-sm">OR</p>
</div>

{/* Google Login button */}
<button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
    <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
        {/* Google SVG path */}
    </svg>
    Login with Google
</button>

{/* Forget password section */}
<div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">Forget password?</div>

{/* Register section */}
<div className="mt-4 text-sm flex justify-between items-center container-mr">
    <p className="mr-3 md:mr-0">If you don't have an account..</p>
    <button className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">Register</button>
</div>

                </div>
                <div className="md:block hidden w-1/2">
                    <img className="rounded-2xl max-h-[1600px]" src="https://loremflickr.com/cache/resized/65535_52650182739_9349929720_h_640_1280_nofilter.jpg" alt="login form image" />
                </div>
            </div>
        </section>
    )
}
