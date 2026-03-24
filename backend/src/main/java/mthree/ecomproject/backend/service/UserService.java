package mthree.ecomproject.backend.service;

import mthree.ecomproject.backend.model.User;
import mthree.ecomproject.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // GET ALL
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // GET BY ID
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // CREATE
    public User createUser(User user) {
        // Optional: set defaults
        if (user.getStatus() == null) {
            user.setStatus("ACTIVE");
        }

        if (user.getJoinDate() == null) {
            user.setJoinDate(java.time.LocalDate.now());
        }

        return userRepository.save(user);
    }

    // UPDATE
    public User updateUser(Long id, User updatedUser) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(updatedUser.getUsername());
                    user.setPassword(updatedUser.getPassword());
                    user.setEmail(updatedUser.getEmail());
                    user.setFirstName(updatedUser.getFirstName());
                    user.setLastName(updatedUser.getLastName());
                    user.setAddress(updatedUser.getAddress());
                    user.setJoinDate(updatedUser.getJoinDate());
                    user.setRole(updatedUser.getRole());
                    user.setStatus(updatedUser.getStatus());
                    return userRepository.save(user);
                })
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // DELETE
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}