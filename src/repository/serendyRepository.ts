import axios from 'axios';

const serendyInstance = axios.create({
    baseURL: 'http://localhost:8000',
});

class SerendyRepository {

    test() {
        return serendyInstance.get('/');
    }

    signIn() {
        return serendyInstance.post
    }

    signUp() {
        return serendyInstance.post
    }
}

const serendyRepository = new SerendyRepository();

export default serendyRepository;