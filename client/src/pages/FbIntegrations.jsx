

export default function FbIntegrations() {
  const isConnected = false;

  return (
    <div className='bg-blue-900 min-h-screen flex justify-center items-center'>
      <div className="min-w-96 p-10 bg-white rounded-xl shadow-lg text-sm flex flex-col">
        <h1 className='text-center text-xl'>
          Facebook Page Integration
        </h1>
        {isConnected && (
          <div>
            <h1 className='text-center text-xl mt-1'>
              <span>Integrated Page: </span>
              <span className='font-semibold'>Fake Business</span>
            </h1>
            <div className='flex flex-col gap-3'>
              <button 
                className="bg-red-500 text-gray-100 p-3 rounded-md hover:bg-opacity-85 disabled:bg-opacity-40 mt-8"
              >
                Delete Integration
              </button>
              <button 
                className="bg-blue-900 text-gray-100 p-3 rounded-md hover:bg-opacity-85 disabled:bg-opacity-40"
              >
                Reply To Messages
              </button>
            </div>
          </div>
        )}
        {!isConnected && (
          <button 
            className="bg-blue-900 text-gray-200 p-3 rounded-md hover:bg-opacity-85 disabled:bg-opacity-40 mt-10"
          >
            Connect Page
          </button>
        )}
      </div>
    </div>
  )
}
