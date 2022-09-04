package com.r2r.ragstoriches;
import com.r2r.ragstoriches.Service.AnimalService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class RagsToRichesApplication{

    AnimalService animalService;
    public static void main(String[] args) {
        SpringApplication.run(RagsToRichesApplication.class, args);
    }
}
