package com.r2r.ragstoriches.Service;

import com.r2r.ragstoriches.Entity.Animal;
import com.r2r.ragstoriches.Entity.Photo;

import java.util.List;

public interface AnimalService {
    Animal findById(String id);
    List<Animal> findAll();
    List<Animal> findBySex(String sex);
    List<Animal> findByAge(int age);
    List<Animal> findByBreed(String breed);
    List<Animal> findByWeight(double weight);
    Animal addNewAnimal(Animal animal);
    Animal addPhotoToAnimal(String animalId, List<Photo> photos);
    Animal editAnimalProfile(String animalId, Animal updatedAnimal);
    Photo insertProfilePicture(String animalId, Photo profilePic);
}
