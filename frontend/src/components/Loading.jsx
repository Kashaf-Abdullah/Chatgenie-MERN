export const LoadingSpinner = () => {
  return (
    <div className="inline-block w-5 h-5 border-2 border-t-2 border-r-transparent border-white rounded-full animate-spin"></div>
  );
};

export const LoadingBig = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="h-3 w-3 rounded-full bg-violet-400 animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-3 w-3 rounded-full bg-violet-400 animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-3 w-3 rounded-full bg-violet-400 animate-bounce"></div>
    </div>
  );
};

export const LoadingSmall = () => {
  return (
    <div className="flex items-center space-x-1.5">
      <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce"></div>
    </div>
  );
};