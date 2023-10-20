import { Preferences } from '@capacitor/preferences';
import { v4 as uuidv4 } from 'uuid';

const USER_KEY = "user";

const useUserId = async () => {
    const user = await Preferences.get({ key: USER_KEY });
    if (!user.value) {
        const userId = uuidv4();
        await Preferences.set({
            key: USER_KEY,
            value: userId
        });

        return userId;
    }

    return user.value;
}

export default useUserId;