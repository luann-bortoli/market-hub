package io.github.luann.markethub.controller;

import io.github.luann.markethub.model.ProductModel;
import io.github.luann.markethub.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductRepository repository;

    public ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<ProductModel> getProducts(){
        return repository.findAll();
    }

    @PostMapping
    public ProductModel addProduct(@RequestBody ProductModel newProduct){
        return repository.save(newProduct);
    }

    @PutMapping("/{id}")
    public ProductModel updateProduct(@PathVariable Long id, @RequestBody ProductModel updatedProduct){
        ProductModel product = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        product.setName(updatedProduct.getName());
        product.setPrice(updatedProduct.getPrice());
        product.setDiscountPrice(updatedProduct.getDiscountPrice());
        product.setCategory(updatedProduct.getCategory());
        product.setSubcategory(updatedProduct.getSubcategory());
        product.setImagePath(updatedProduct.getImagePath());

        return repository.save(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id){
        repository.deleteById(id);
    }

}
