import Level1Icon from '../../images/icons/level1.svg';
import Level2Icon from '../../images/icons/level2.svg';
import Level3Icon from '../../images/icons/level3.svg';

export const LevelInformation = {
    3: {
        name: "Level 1",
        description: "Level 1 allows your waddle pals to view your motivation score, and general tips on how to support them when arround. We won’t disclose your direct happiness details or your results with your pals.",
        icon: Level1Icon,
        value: 1
    },
    2: {
        name: "Level 2",
        description: "Level 2 allows your waddle pals to view your motivation score, your current engagement and general tips on how to support them when around. We won’t disclose your direct happiness details or your results with your pals.",
        icon: Level2Icon,
        value: 2
    },
    1: {
        name: "Level 3",
        description: "You are trustworthy! Your wadle pal needs you for support. Although you wont get direct survey responses, you’ll get access to your pal’s happiness score, motivation, general tips they recieved alongside resources prepared just for you.",
        icon: Level3Icon,
        value: 3
    }
}