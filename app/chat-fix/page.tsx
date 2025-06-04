export default function Page() {
return (
    
    <div className="max-w-xl mx-auto p-8">
        <title>Duneraft Chat Fix</title>
        
        <h1 className="text-3xl font-bold mb-6 text-center">for OFFICIAL minecraft account only(to enable in-game chat and see custom auth skins)</h1>
       
        <p className="text-xl mb-4 text-white-700">
            put this .jar file in the .minecraft folder, 

        </p>
        <p className="mb-4 text-white-700">
           (insert .jar file here)
         </p>
         <p className="text-xl mb-4 text-white-700">
           then add the following line to the Java/JVM arguments in the launcher:
         </p>
         <p className="mb-4 text-white-700">
            -javaagent:chat-fix.jar=dualie.ink/drasl
         </p>
          <p className="text-xl mb-4 text-white-700">
            If you can’t find the .minecraft folder, or if the above method didn't work, you can place the file anywhere and just replace it with the full path. For example:

         </p>
         <p className="mb-4 text-white-700">
            -javaagent:D:/chat-fix.jar=dualie.ink/drasl
         </p>
             
        
        
    </div>
)
}