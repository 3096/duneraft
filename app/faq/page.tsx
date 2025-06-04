export default function Page() {
return (
    
    <div className="max-w-xl mx-auto p-8">
        <title>Duneraft FAQ</title>
        
        <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
        <h6 className="text-xl mb-4 text-white-700">
            What is Chat Validation Error?/Why can't I see skins from certain players?
        </h6>
        <p className="mb-4 text-white-700">
            see chat fix page
        </p>
        <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
            bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/chat-fix"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat fix
          </a>
          <p className="mb-4 text-white-700">
            
        </p>
        <p className="text-xl mb-4 text-white-700">
            What is the server version? 
        </p>
        <p className="mb-8 text-white-700">
            Java 1.21.5
        </p>
        <p className="text-xl mb-4 text-white-700">
            Why can't I join the server?/What is whitelist?
        </p>
        <p className="mb-4 text-white-700">
            See join page 
        </p>
        <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
            bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/join"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join
          </a>
        
    </div>
)
}