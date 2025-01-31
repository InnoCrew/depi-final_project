import './CommentsForm.css';
import {useEffect} from "react";
function CommentsForm(){
    useEffect(() => {
        const forms = document.querySelectorAll(".needs-validation");
    
        Array.from(forms).forEach((form) => {
          form.addEventListener(
            "submit",
            (event) => {
              if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
              }
    
              form.classList.add("was-validated");
            },
            false
          );
        });
      }, []);
    return(
        <>
        <div className="container form-container w-75">
            <div className="">
                <div className="col-md-12">
                    <h3 className="">What do you think?</h3>
                    <form id="commentForm" className="needs-validation w-100" noValidate>
                        <div className="mb-3">
                            <textarea id="comment" className="form-control" rows="4"placeholder="Your Comment" required></textarea>
                            <div className="invalid-feedback">Please enter your comment.</div>
                        </div>
                        
                        <div className="d-flex w-100 gap-2 flex-column flex-md-row">
                            <div className="mb-3 w-100 w-md-50">
                                <label htmlFor="name" className="form-label">Name </label>
                                <input type="text" id="name" className="form-control w-100" required minLength="3"/>
                                <div className="invalid-feedback">Name must be at least 3 characters long.</div>
                            </div>
                            <div className="mb-3 w-100 w-md-50 ">
                                <label htmlFor="name" className="form-label">Last Name</label>
                                <input type="text" id="name" className="form-control w-100" required minLength="3"/>
                                <div className="invalid-feedback">Last Name must be at least 3 characters long.</div>
                            </div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        
                        
                    
                        <button type="submit" className="btn btn-dark  w-100 w-md-25 text-center p-2">Post Comment</button>
                    </form>
                </div>
             </div>
        </div>  
        </>
    )
}
export default CommentsForm;