
/*
    Subject: 관찰 대상
    WeatherData: 구체적 관찰 대상
    Observer: 관찰자
    Current~, Stati~ : 구체적 관찰자

    => WeatherData에 관찰자들을 유지하여 data가 변경되면 update 메서드를 호출해 상태를 업데이트 해준다

*/

import { CurrentConditionDisplay } from "./CurrentConditionDisplay";
import { StatisticDisplay } from "./StatisticDisplay";
import { WeatherData } from "./WeatherData";

const test = (): void => {
    const weatherData: WeatherData = new WeatherData();
    weatherData.registerObserver(new CurrentConditionDisplay());
    weatherData.registerObserver(new StatisticDisplay());

    weatherData.setMeasurement(30, 65, 40);
    weatherData.measurementChanged();       // 관찰자의 update 메서드를 호출한다
    weatherData.setMeasurement(28, 55, 29);
    weatherData.measurementChanged();
    weatherData.setMeasurement(29, 50, 30);
    weatherData.measurementChanged();
    weatherData.setMeasurement(31, 60, 34);
    weatherData.measurementChanged();
    weatherData.setMeasurement(31, 55, 34);
    weatherData.measurementChanged();
}

test();