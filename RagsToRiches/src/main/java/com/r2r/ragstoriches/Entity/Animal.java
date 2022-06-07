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
    private String id;
    @Field
    private String name;
    @Field
    private String breed;
    @Field
    private String sex;
    @Field
    private String weight;
    @Field
    private String age;
    @Field
    private Photo profilePicture;
    @Field
    @OneToMany(cascade = CascadeType.ALL)
    private Photo photos;

    public Animal() {
    }

    public Animal(String name, String breed, String sex, String weight, String age) {
        this.name = name;
        this.breed = breed;
        this.sex = sex;
        this.weight = weight;
        this.age = age;
    }

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public Photo getPhotos() {
        return photos;
    }
    public void setPhotos(Photo photos) {
        this.photos = photos;
    }
    public Photo getProfilePicture() {
        return profilePicture;
    }
    public void setProfilePicture(Photo profilePicture) {
        this.profilePicture = profilePicture;
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
    public void setWeight(String weight) {
        this.weight = weight;
    }
    public void setAge(String age) {
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
    public String getWeight() {
        return weight;
    }
    public String getAge() {
        return age;
    }
    @Override
    public String toString() {
        return "Animal{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", breed='" + breed + '\'' +
                ", sex='" + sex + '\'' +
                ", weight=" + weight +
                ", age=" + age +
                '}';
    }
}
