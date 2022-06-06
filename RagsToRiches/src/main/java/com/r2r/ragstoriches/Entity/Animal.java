package com.r2r.ragstoriches.Entity;


import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.CascadeType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Document
public class Animal {

    @Id
    private String animalId;
    @Field
    private String name;
    @Field
    private String breed;
    @Field
    private String sex;
    @Field
    private double weight;
    @Field
    private int age;
    @Field
    private Photo profilePicture;
    @Field
    @OneToMany(cascade = CascadeType.ALL)
    private List<Photo> photos;

    public Animal() {
    }

    public Animal(String name, String breed, String sex, double weight, int age) {
        this.name = name;
        this.breed = breed;
        this.sex = sex;
        this.weight = weight;
        this.age = age;
    }

    public List<Photo> getPhoto() {
        return photos;
    }
    public String getAnimalId() {
        return animalId;
    }
    public void setAnimalId(String animalId) {
        this.animalId = animalId;
    }
    public Photo getProfilePicture() {
        return profilePicture;
    }
    public void setProfilePicture(Photo profilePicture) {
        this.profilePicture = profilePicture;
    }
    public void setPhoto(List<Photo> photos) {
        this.photos = photos;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setBreed(String breed) {
        this.breed = breed;
    }
    public void setSex(String sex) {
        this.sex = sex;
    }
    public void setWeight(double weight) {
        this.weight = weight;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getName() {
        return name;
    }
    public String getBreed() {
        return breed;
    }
    public String getSex() {
        return sex;
    }
    public double getWeight() {
        return weight;
    }
    public int getAge() {
        return age;
    }
    @Override
    public String toString() {
        return "Animal{" +
                "id='" + animalId + '\'' +
                ", name='" + name + '\'' +
                ", breed='" + breed + '\'' +
                ", sex='" + sex + '\'' +
                ", weight=" + weight +
                ", age=" + age +
                '}';
    }
}
