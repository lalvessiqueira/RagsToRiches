package com.r2r.ragstoriches.Service;

import com.r2r.ragstoriches.Entity.Animal;
import com.r2r.ragstoriches.Entity.Photo;

import java.util.List;
public interface AnimalService {
    Animal findById(String id);
    List<Animal> findAll();
    List<Animal> findBySex(String sex);
    List<Animal> findByAge(String age);
    List<Animal> findByBreed(String breed);
    List<Animal> findByWeight(String weight);
    Animal addNewAnimal(Animal animal);
    Photo addPhotoToAnimal(String animalId, Photo photos);
    Animal editAnimalInfo(String animalId, Animal updatedAnimal);
    Photo editAnimalProfile(String animalId, Photo profilePic);
    Photo editAnimalPhotos(String animalId, Photo photos);
    Photo insertProfilePicture(String animalId, Photo profilePic);
    void deleteAnimalById(String animalId);
}
