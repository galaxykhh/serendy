import axios from 'axios';

const serendyInstance = axios.create({
    baseURL: 'http://localhost:8000',
});

interface IAuth {
    account: string;
    password: string;
}

class SerendyRepository {

    checkDuplicate(account: string) {
        return serendyInstance.get(`/api/auth/check/${account}`);
    }

    signUp(data: IAuth) {
        return serendyInstance.post('/api/auth/signup', data);
    }

    signIn(data: IAuth) {
        return serendyInstance.post('/api/auth/signin', data);
    }
}

const serendyRepository = new SerendyRepository();

export default serendyRepository;