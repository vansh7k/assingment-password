import hashlib

target_hash = "SHA256 hash code"

for num in range(1000): 
    guess = str(num).zfill(3) 
    hashed_guess = hashlib.sha256(guess.encode()).hexdigest()

    if hashed_guess == target_hash:
        print(f"Match found! The original number is: {guess}")
        break  
else:
    print("No match found in the range 000-999.")