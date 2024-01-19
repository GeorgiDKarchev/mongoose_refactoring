import mongoose from 'mongoose';
const gradesShema = new mongoose.Schema({
    class_id: {
        type: Number,
        required: true
    },
    learner_id: {
        type: Number,
        required: true
    },
    scores:
        [
            {
                score_type: String, score: Number
            }

        ]



});

export default mongoose.model('Grade', gradesShema);