
import "./profile.css"
function Profile() {
    

 
  return (
    <>
   
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-blue-500 flex items-center justify-center">
    <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-8 text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Profile</h1>
      <div className="text-left space-y-4">
        <p className="text-lg text-gray-700">
          <strong>Name:</strong> 
        </p>
        <p className="text-lg text-gray-700">
          <strong>Email:</strong> 
        </p>
      </div>
      <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
        Edit Profile
      </button>
    </div>
  </div>
  </>
  )
}

export default Profile