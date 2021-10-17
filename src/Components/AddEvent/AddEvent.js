import './AddEvent.css';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Navbarr from '../Shared/Navbarr/Navbarr';
import axios from 'axios';


const AddEvent = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const OnSubmit = data => {
        const formData = new FormData();
        formData.append('file', data.Banner[0]);
        formData.append('EventTitle', data.EventTitle);
        //   formData.append('EventDate', data.EventDate);
        //  formData.append('Description', data.Description);
        axios.post('https://murmuring-shelf-27420.herokuapp.com/addEvent', formData)
            .then(resutlInfo => {
                alert(`${resutlInfo.data}`)
                reset();
            })
            .catch(err =>alert(`${err}`))
    }
    return (
        <Container>
            <Navbarr />
            <div className="row mt-5">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="shadow p-3 mb-5 bg-body rounded col-md-9">
                    <form onSubmit={handleSubmit(OnSubmit)}>
                        <div className="row">
                            <div className="col-md-6">
                                <span>Event Title</span><br />
                                <input {...register('EventTitle', { required: true })} className="inputHighlight" type="name" />
                                {errors.EventTitle && <p>EventTitle is required</p>}
                            </div>
                            <div className="col-md-6">
                                <span>Event Date</span><br />
                                <input {...register('EventDate', { required: true })} className="inputHighlight" type="date" />
                                {errors.EventDate && <p>Event date is required</p>}
                            </div>

                            <div className="col-md-6">
                                <span>Description</span><br />
                                <input  {...register('Description', { required: true })} className="inputHighlight" type="name" name="Description" />
                                {errors.Description && <p>Description is required</p>}
                            </div>
                            <div className="col-md-6">
                                <span>Banner</span><br />
                                <input {...register('Banner', { required: true })} className="inputHighlight" type="file" name="Banner" />
                                {errors.Banner && <p>picture is required</p>}
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default AddEvent;