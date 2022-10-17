package com.example.mintic.bike.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.mintic.bike.model.Bikes;
import com.example.mintic.bike.repository.crud.CrudRepositoryBike;

@Repository
public class RepositoryBike {
    
    @Autowired
    private CrudRepositoryBike crudRepositoryBike;


    public List<Bikes> getAll(){
        return (List<Bikes>) crudRepositoryBike.findAll();
    }
    public Optional<Bikes> getBikes(int id){
        return crudRepositoryBike.findById(id);
    }
    
    public Bikes save(Bikes bikes){
        return crudRepositoryBike.save(bikes);
    }

    public void delete(Bikes bikes){
        crudRepositoryBike.delete(bikes);
    }

}
