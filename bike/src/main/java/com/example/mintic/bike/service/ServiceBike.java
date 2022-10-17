package com.example.mintic.bike.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mintic.bike.model.Bikes;
import com.example.mintic.bike.repository.RepositoryBike;

@Service
public class ServiceBike {
    
    @Autowired
    private RepositoryBike repositoryBike;

    
    public List<Bikes> getAll() {
        return repositoryBike.getAll();
    }

    public Optional<Bikes> getBikes(int id) {
        return repositoryBike.getBikes(id);
    }

    public Bikes save(Bikes bikes) {
        if (bikes.getId() == null) {
            return repositoryBike.save(bikes);
        } else {
            Optional<Bikes> bike1 = repositoryBike.getBikes(bikes.getId());
            if (bike1.isEmpty()) {
                return repositoryBike.save(bikes);
            } else {
                return bikes;
            }
        }
    }

    public Bikes update(Bikes bikes) {
        if(bikes.getId()!=null){
            Optional<Bikes> bike1 = repositoryBike.getBikes(bikes.getId());
            if(bike1.isPresent()){
                if(bikes.getName()!=null){
                    bike1.get().setName(bikes.getName());
                }
                if(bikes.getYear()!=null){
                    bike1.get().setYear(bikes.getYear());
                }
                if(bikes.getCategory()!=null){
                    bike1.get().setCategory(bikes.getCategory());
                }
                repositoryBike.save(bike1.get());
                return bike1.get();
        }else{
            return bikes;
        }
    }else{
        return bikes;
    }
    }

    public boolean delete(int id){
        boolean bandera = false;
        Optional<Bikes> bike1 = repositoryBike.getBikes(id);
        if(bike1.isPresent()){
            repositoryBike.delete(bike1.get());
            bandera = true;
        }
        return bandera;
    }

}
