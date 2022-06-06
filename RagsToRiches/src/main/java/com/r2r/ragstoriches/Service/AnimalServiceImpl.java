package com.r2r.ragstoriches.Service;

import com.r2r.ragstoriches.Entity.Animal;
import com.r2r.ragstoriches.Entity.Photo;
import com.r2r.ragstoriches.Repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalServiceImpl implements AnimalService{

    @Autowired
    AnimalRepository animalRepository;

    @Override
    public Animal addNewAnimal(Animal animal) {
        return animalRepository.save(animal);
    }

    @Override
    public Animal addPhotoToAnimal(String animalId, List<Photo> photos) {
        Animal animal = animalRepository.getAnimalById(animalId);
        for (Photo photo : photos) {
            animal.getPhoto().add(photo);
        }
        animalRepository.save(animal);
        return animal;
    }

    @Override
    public Animal editAnimalProfile(String animalId, Animal updatedAnimal) {
        Animal animal = animalRepository.getAnimalById(animalId);

        animal.setName(updatedAnimal.getName());
        animal.setAge(updatedAnimal.getAge());
        animal.setProfilePicture(updatedAnimal.getProfilePicture());
        animal.setBreed(updatedAnimal.getBreed());
        animal.setSex(updatedAnimal.getSex());
        animal.setWeight(updatedAnimal.getWeight());
        animal.setPhoto(updatedAnimal.getPhoto());

        return animalRepository.save(animal);
    }

    @Override
    public Photo insertProfilePicture(String animalId, Photo profilePic) {
        Animal animal = animalRepository.getAnimalById(animalId);
        animal.setProfilePicture(profilePic);
        animalRepository.save(animal);
        return profilePic;
    }

    @Override
    public Animal findById(String id) {
        return animalRepository.getAnimalById(id);
    }

    @Override
    public List<Animal> findAll() {
        return animalRepository.findAll();
    }

    @Override
    public List<Animal> findBySex(String sex) {
        return animalRepository.getAnimalBySex(sex);
    }

    @Override
    public List<Animal> findByAge(int age) {
        return animalRepository.getAnimalByAge(age);
    }

    @Override
    public List<Animal> findByBreed(String breed) {
        return animalRepository.getAnimalByBreed(breed);
    }

    @Override
    public List<Animal> findByWeight(double weight) {
        return animalRepository.getAnimalByWeight(weight);
    }


}
