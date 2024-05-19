"use client"

interface EmailHeadersProps {
  headerDetails: string;
}

const EmailHeaders: React.FC<EmailHeadersProps> = ({headerDetails}) => {
    return (
       
        <div className="px-16 my-8">
          {headerDetails && 
          <>
           <h3 className="text-2xl font-bold">Headers</h3>
            <div className="mockup-code flex justify-content-center">
            <pre data-prefix="~" className="text-sky-500"><code style={{
              display: "block",
              marginLeft: "50px",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              wordBreak: "break-all",
            }}>{headerDetails}</code></pre>
          </div>
          </>
          }
        </div>
    )
}

export default EmailHeaders;