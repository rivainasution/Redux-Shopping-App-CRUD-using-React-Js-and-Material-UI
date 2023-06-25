import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IconCalendar, IconTime } from "../../../../assets/topNav/icons";
import { DataLogin } from "../../../../configs/data";
import { getNavigation } from "../../../../features/navigation";

const NavigationTopbar = () => {
    const navigation = useSelector(getNavigation);
    const getData = DataLogin();

    //   --- Date ---
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [greeting, setGreeting] = useState('');
    const [currentDateTimeFormat, setCurrentDateTimeFormat] = useState(
        new Date()
    );

    //   --- Time ---
    useEffect(() => {
        setInterval(() => setCurrentDateTimeFormat(new Date()), 1000);
    }, []);

    //   --- Set Time ---
    useEffect(() => {
        setCurrentDate(dayjs(currentDateTimeFormat).format('dddd,D MMMM YYYY'));
        setCurrentTime(dayjs(currentDateTimeFormat).format('HH:mm:ss'));
        const hour = Number(dayjs(currentDateTimeFormat).format('H'));

        if (hour >= 5 && hour < 12) {
        setGreeting('Morning');
        } else if (hour >= 12 && hour < 17) {
        setGreeting('Afternoon');
        } else if (hour >= 17 && hour <= 24) {
        setGreeting('Evening');
        } else if (hour >= 0 && hour < 5) {
        setGreeting('Night');
        }
    }, [currentDateTimeFormat]);
   

    return (
        <Box>
            {
                navigation === 'Dashboard' ? 
                <Box display={'flex'} flexDirection={'column'}>
                    <Typography
                        fontFamily={'sans-serif'}
                        fontStyle={'normal'}
                        fontWeight={600}
                        fontSize={'24px'}
                        lineHeight={'33px'}
                        color={'#171717'}
                    >
                        Good {greeting}, {getData.namaLengkap}
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} mt={'5px'}>
                        <IconCalendar />
                        <Typography
                            fontFamily={'sans-serif'}
                            fontStyle={'normal'}
                            fontWeight={400}
                            fontSize={'12px'}
                            lineHeight={'16px'}
                            color={'#989898'}
                            ml={'8px'}
                            mr={'22px'}
                        >{currentDate}</Typography>
                        <IconTime />
                        <Typography
                            fontFamily={'sans-serif'}
                            fontStyle={'normal'}
                            fontWeight={400}
                            fontSize={'12px'}
                            lineHeight={'16px'}
                            color={'#989898'}
                            ml={'8px'}
                            
                        >{currentTime}</Typography>
                    </Box>
                </Box>
            : 
                <Typography
                        fontFamily={'sans-serif'}
                        fontStyle={'normal'}
                        fontWeight={600}
                        fontSize={'24px'}
                        lineHeight={'33px'}
                        color={'#171717'}
                >{navigation}</Typography> 
                   

            }
        </Box>
    );
};

  export default NavigationTopbar