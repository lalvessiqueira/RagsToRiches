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
    public Photo insertPhotoToAnimal(@PathVariable String animalId, @RequestBody Photo photos) {
        return animalService.addPhotoToAnimal(animalId, photos);
    }

    @PostMapping("animal/insert-profile-image/{animalId}")
    public Photo insertProfilePictureToAnimal(@PathVariable String animalId, @RequestBody Photo photo) {
        return animalService.insertProfilePicture(animalId, photo);
    }

    @GetMapping("/animals/retrieve/{id}")
    public Animal getAnimalById(@PathVariable String id) {
        return animalService.findById(id);
    }

    @DeleteMapping("/animal/delete/{id}")
    public void deleteAnimalById(@PathVariable String id) {
        animalService.deleteAnimalById(id);
    }

    @PutMapping("/animal/update/{id}")
    public Animal updateAnimalByID(@PathVariable String id, @RequestBody Animal newAnimal) {
        return animalService.editAnimalProfile(id, newAnimal);
    }

}
