package com.r2r.ragstoriches.Repository;
import com.r2r.ragstoriches.Entity.Animal;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AnimalRepository extends MongoRepository<Animal, String> {
    List<Animal> getAnimalBySex(String sex);
    List<Animal> getAnimalByAge (int age);
    List<Animal> getAnimalByBreed(String breed);
    List<Animal> getAnimalByWeight(double weight);
    Animal getAnimalById(String id);

}
