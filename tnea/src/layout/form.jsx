

const form = () => {
  return (
    <>
        {/* <!--Registration Form--> */}
    <div className="container mt-5">    
        <h2 className="text-center mb-4">TNEA Registration Form</h2>
         {/* <!-- Use Login Section --> */}
         <div className="text-center mb-4">
            <p><i className="bi bi-person custom-icon"></i> <span className="custom-text">User Login</span></p>
        </div>
        <form>
            <div className="mb-3">
                <label for="studentName" className="form-label">Student Name</label>
                <input type="text" className="form-control" id="studentName" name="studentName" required />
            </div>
            <div className="mb-3">
                <label for="schoolName" className="form-label">School Name</label>
                <input type="text" className="form-control" id="schoolName" name="schoolName" required />
            </div>
            <div className="mb-3">
                <label for="hscRegNo" className="form-label">HSC Registration No</label>
                <input type="text" className="form-control" id="hscRegNo" name="hscRegNo" required />
            </div>
            <div className="mb-3">
                <label for="marks" className="form-label">Marks</label>
                <input type="number" className="form-control" id="marks" name="marks" required />
            </div>
            <div className="mb-3">
                <label for="location" className="form-label">Location</label>
                <input type="text" className="form-control" id="location" name="location" required />
            </div>
            <div className="mb-3">
                <label for="parentDetails" className="form-label">Parent Details</label>
                <input type="text" className="form-control" id="parentDetails" name="parentDetails" required />
            </div>
            <div className="mb-3">
                <label for="contactDetails" className="form-label">Contact Details</label>
                <input type="text" className="form-control" id="contactDetails" name="contactDetails" required />
            </div>
            {/* <!-- Category II Inputs --> */}
            <div className="form-group">
                <label for="photo">Photograph:</label>
                <input type="file" id="photo" name="photo" accept="image/*" required />
            </div>
            <div className="form-group">
                <label for="signature">Signature:</label>
                <input type="file" id="signature" name="signature" accept="image/*" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
        </div>
    </>
  )
  
}

export default form 