import React from 'react'
import { useState } from 'react';
import { UserData } from '../context/UserContext';
import { LoadingSpinner } from "../components/Loading";
import { useNavigate } from 'react-router-dom';
import { ChatData } from '../context/ChatContext';
import { FiKey, FiArrowRight, FiMessageCircle } from 'react-icons/fi';

const Verify = () => {
    const [otp, setOtp] = useState("");

  const { verifyUser, btnLoading } = UserData();

  const { fetchChats } = ChatData();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    verifyUser(Number(otp), navigate, fetchChats);
  };
  return (
   <main className="grid min-h-[100dvh] place-items-center overflow-y-auto px-4 py-8">
      <div className="w-full max-w-md rounded-3xl border border-white/[0.08] bg-[#101521]/95 p-6 shadow-2xl shadow-black/40 backdrop-blur md:p-8">
        <div className="mb-8 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-600 text-xl text-white shadow-lg shadow-violet-950/40">
          <FiMessageCircle />
        </div>
        <h1 className="text-2xl font-semibold text-white">Check your email</h1>
        <p className="mt-2 mb-7 text-sm leading-6 text-slate-400">Enter the verification code we sent to your inbox.</p>
        <form onSubmit={submitHandler}>
          <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="otp">Verification code</label>
          <div className="relative mb-5">
            <FiKey className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="number"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit code"
              className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.04] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400/50 focus:ring-4 focus:ring-indigo-500/10"
              required
            />
          </div>
          <button className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60" disabled={btnLoading}>
            {btnLoading ? <LoadingSpinner /> : <>Verify <FiArrowRight /></>}
          </button>
        </form>
      </div>
    </main>
  )
}

export default Verify
