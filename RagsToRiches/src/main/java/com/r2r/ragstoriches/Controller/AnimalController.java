package com.r2r.ragstoriches.Controller;

import com.r2r.ragstoriches.Entity.Animal;
import com.r2r.ragstoriches.Entity.Photo;
import com.r2r.ragstoriches.Repository.AnimalRepository;
import com.r2r.ragstoriches.Service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class AnimalController {

    @Autowired
    private AnimalService animalService;

    @GetMapping("/animals/retrieve")
    public List<Animal> getAnimals() {
        return animalService.findAll();
    }

    @PostMapping("/animals/add")
    public Animal addAnimals(@RequestBody Animal animal) {
        return animalService.addNewAnimal(animal);
    }

    @PostMapping("animal/insert-image/{animalId}")
    public Animal insertPhotoToAnimal(@PathVariable String animalId, @RequestBody List<Photo> photos) {
        return animalService.addPhotoToAnimal(animalId, photos);
    }
}
