package com.r2r.ragstoriches;

import com.r2r.ragstoriches.Entity.Animal;
import com.r2r.ragstoriches.Repository.AnimalRepository;
import com.r2r.ragstoriches.Service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class RagsToRichesApplication implements CommandLineRunner {

    @Autowired
    private AnimalService animalService;

    public static void main(String[] args) {
        SpringApplication.run(RagsToRichesApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

//        animalService.addNewAnimal(new Animal("Butter", "American wire-hair","M", 10.0, 4));
//        animalService.addNewAnimal(new Animal("Almendoa", "American short-hair","F", 12.0, 3));

        // fetch all customers
        System.out.println("Customers found with findAll():");
        System.out.println("-------------------------------");
        for (Animal animal : animalService.findAll()) {
            System.out.println(animal);
        }
//        System.out.println();
//
//        // fetch an individual customer
//        System.out.println("Customer found with findByName(\"Kadu\"):");
//        System.out.println("--------------------------------");
//        System.out.println(repository.findByName("Kadu"));
//
//        System.out.println("Customers found with findByLastName('Smith'):");
//        System.out.println("--------------------------------");
//        for (Animal animal : repository.findBySex("F")) {
//            System.out.println(animal);
//        }

    }


}
