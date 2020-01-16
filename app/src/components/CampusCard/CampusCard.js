import React, { Component } from 'react'
import '../../css/CampusCard.css'

class CampusCard extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="CampusCardContainer">
                <img 
                    className="CampusCardImage"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBUPEg8VFRUVFRUPFRUVDxUPDxUPFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw8PDy0ZFRkrKysrKzctLSsrLSs3KysrLTcrLSsrLS0tLS0tLSsrLSsrKysrKysrKysrKysrKysrK//AABEIAOIA3wMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAFxABAQEBAAAAAAAAAAAAAAAAAAERMf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AMPAxQAAABFAAhAAAAACEAAAACgAAAABgAQ0oCxABFAAAKtQAKICgAAAIoAAAAAUoACwCCKCAAAYBRUAgAGGBAAAAAAADQAAAAAABU0ACgBhQABaCAAAAGAABQCAABAAAJQECQCgCKoEAABAAAAUCgAAAAAEAAwAAAAoAAAAAAAAAAAAAAGgAKgAAACApAACgAaABgAAACAoAECLQQgsgIQADAAAAAAKQARaQAwAIAAABAKgGgABFAIAEKABaABQAKALiGgigCKAAAACCKCgBAAAA0AAACgAAAABQAAAAACgFAABAWgAAAAAYFIAEAAAAMAwEBQABFAgACKgKAABQMEUA0QFAAwAABAMBQoigAABCgCKAioCgAAUARQAAAAIABgYAYYQAgAAAAAAAAGAAAAAFAAAAAAIAAAAaAAAABgAAAAAAAAACKIAGqGAAAAIoAAgAgKEFACQAABF0AVCoFAUDTQACIAUA0wIoBQAAAAAAABAIYRRHV4AIABSggqAAAoVQBAAJ0AFSgAIApQIJAEBQWAtAH//2Q=="></img>
                <a className="CampusNameLink"><h4>Campus Name</h4></a>
                <p className="NumStudents">NUM Students</p>
                <div className="ButtonContainer">
                    <button className="editBtn">Edit</button>
                    <button className="deleteBtn">Delete</button>
                </div>
            </div>
        );
    }
}

export default CampusCard;